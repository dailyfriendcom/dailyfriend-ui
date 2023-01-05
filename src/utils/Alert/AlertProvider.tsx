import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { AlertButton } from 'react-native';
import { Keyboard } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Button, Dialog, Portal, RadioButton, Text } from 'react-native-paper';
import { AlertOnCreate } from './AlertEvents';

export interface AlertButtonOptions {
  label: string;
  value: string;
}

export interface Alert {
  type: 'alert' | 'chooseOptions';
  title: string;
  message?: string;
  buttons?: AlertButton[];
  customContent?: React.ReactNode;
  options?: AlertButtonOptions[];
  onDismiss: (option?: string) => void;
}

const AlertProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAlert, setCurrentAlert] = useState<Alert | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const alertsQueue = useRef<Alert[]>([]);

  const listenAlertsRequest = useCallback((): string => {
    return EventRegister.addEventListener(AlertOnCreate, (newAlert: Alert) => {
      alertsQueue.current = [...alertsQueue.current, newAlert];
      if (alertsQueue.current.length === 1) {
        showAlert(newAlert);
      }
    }) as string;
  }, []);

  useEffect(() => {
    const listen = listenAlertsRequest();
    return () => {
      EventRegister.removeEventListener(listen);
    };
  }, [listenAlertsRequest]);

  function showAlert(alert: Alert) {
    Keyboard.dismiss();
    setCurrentAlert(alert);
    setIsVisible(true);
  }

  const showNextAlert = useCallback(() => {
    alertsQueue.current.shift();
    if (alertsQueue.current.length > 0) {
      showAlert(alertsQueue.current[0] as Alert);
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setSelectedItem(null);
    showNextAlert();
  }, [showNextAlert]);

  const handleSelectItem = useCallback(() => {
    handleDismiss();
    currentAlert?.onDismiss(selectedItem as string);
  }, [currentAlert, handleDismiss, selectedItem]);

  /**
   * Renders
   */
  const renderContent = useCallback(() => {
    if (currentAlert?.type === 'chooseOptions') {
      return (
        <>
          <Dialog.ScrollArea>
            {currentAlert?.options?.map((option, index) => {
              return (
                <RadioButton.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                  status={
                    selectedItem === option.value ? 'checked' : 'unchecked'
                  }
                  onPress={() => setSelectedItem(option.value)}
                >
                  {option.label}
                </RadioButton.Item>
              );
            })}
          </Dialog.ScrollArea>
        </>
      );
    }

    if (currentAlert?.customContent) {
      return currentAlert?.customContent;
    }

    return <Text>{currentAlert?.message}</Text>;
  }, [currentAlert, selectedItem]);

  const renderActions = useCallback(() => {
    if (currentAlert?.type === 'chooseOptions') {
      return (
        <>
          <Button onPress={handleDismiss}>Cancelar</Button>
          <Button onPress={handleSelectItem}>Selecionar</Button>
        </>
      );
    }

    return (
      <>
        {currentAlert?.buttons?.map((button, index) => {
          return (
            <Button
              key={index}
              onPress={() => {
                button.onPress?.();
                handleDismiss();
              }}
            >
              {button.text}
            </Button>
          );
        })}
      </>
    );
  }, [currentAlert, handleSelectItem, handleDismiss]);

  return (
    <>
      {children}
      <Portal>
        <Dialog visible={isVisible} onDismiss={handleDismiss}>
          <Dialog.Title>{currentAlert?.title}</Dialog.Title>
          <Dialog.Content>{renderContent()}</Dialog.Content>
          <Dialog.Actions>{renderActions()}</Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default AlertProvider;
