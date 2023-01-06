import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import type { ShowActionSheetProps } from './index';
import ActionSheet from '../../components/ActionSheet/ActionSheetWrapper';
import { ActionSheetOnCreate } from './ActionSheetEvents';

const ActionSheetProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentActionSheet, setCurrentActionSheet] =
    useState<ShowActionSheetProps | null>(null);

  const actionSheetQueue = useRef<ShowActionSheetProps[]>([]);

  const listenActionSheetsRequest = useCallback((): string => {
    return EventRegister.addEventListener(
      ActionSheetOnCreate,
      (newActionSheet: ShowActionSheetProps) => {
        actionSheetQueue.current = [
          ...actionSheetQueue.current,
          newActionSheet,
        ];
        if (actionSheetQueue.current.length === 1) {
          showActionSheet(newActionSheet);
        }
      }
    ) as string;
  }, []);

  useEffect(() => {
    const listen = listenActionSheetsRequest();
    return () => {
      EventRegister.removeEventListener(listen);
    };
  }, [listenActionSheetsRequest]);

  function showActionSheet(actionSheet: ShowActionSheetProps) {
    setCurrentActionSheet(actionSheet);
    setIsVisible(true);
  }

  const showNextActionSheet = useCallback(() => {
    actionSheetQueue.current.shift();
    if (actionSheetQueue.current.length > 0) {
      showActionSheet(actionSheetQueue.current[0] as ShowActionSheetProps);
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      showNextActionSheet();
    }, 500);
  }, [showNextActionSheet]);

  return (
    <>
      {children}
      <ActionSheet
        {...(currentActionSheet as ShowActionSheetProps)}
        visible={isVisible}
        onDismiss={handleDismiss}
      >
        {currentActionSheet?.options.map((option, index) => (
          <ActionSheet.Item key={index} {...option} />
        ))}
      </ActionSheet>
    </>
  );
};

export default ActionSheetProvider;
