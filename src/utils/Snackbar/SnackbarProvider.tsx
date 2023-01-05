import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import { Snackbar, SnackbarProps } from 'react-native-paper';
import { SnackbarOnCreate } from './SnackbarEvents';

export interface Snackbar {
  text: string;
  action: SnackbarProps['action'];
  duration: SnackbarProps['duration'];
}

const SnackbarProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSnackbar, setCurrentSnackbar] = useState<Snackbar | null>(null);

  const snackbarsQueue = useRef<Snackbar[]>([]);

  const listenSnackbarsRequest = useCallback((): string => {
    return EventRegister.addEventListener(
      SnackbarOnCreate,
      (newSnackbar: Snackbar) => {
        snackbarsQueue.current = [...snackbarsQueue.current, newSnackbar];
        if (snackbarsQueue.current.length === 1) {
          showSnackbar(newSnackbar);
        }
      }
    ) as string;
  }, []);

  useEffect(() => {
    const listen = listenSnackbarsRequest();
    return () => {
      EventRegister.removeEventListener(listen);
    };
  }, [listenSnackbarsRequest]);

  function showSnackbar(snackbar: Snackbar) {
    setCurrentSnackbar(snackbar);
    setIsVisible(true);
  }

  const showNextSnackbar = useCallback(() => {
    snackbarsQueue.current.shift();
    if (snackbarsQueue.current.length > 0) {
      showSnackbar(snackbarsQueue.current[0] as Snackbar);
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      showNextSnackbar();
    }, 200);
  }, [showNextSnackbar]);

  return (
    <>
      {children}
      <Snackbar
        visible={isVisible}
        onDismiss={handleDismiss}
        action={currentSnackbar?.action}
        duration={currentSnackbar?.duration}
      >
        {currentSnackbar?.text}
      </Snackbar>
    </>
  );
};

export default SnackbarProvider;
