import {useState, useCallback, useMemo} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export const useActiveStyle = (isActive: boolean) =>
  useMemo(() => {
    if (isActive) {
      return {
        iconStyle: {
          borderColor: 'red',
        },
        bgStyle: {
          backgroundColor: 'rgba(0, 0, 0, .08)',
        },
        fontStyle: {
          fontWeight: 'bold',
        } as unknown as StyleProp<TextStyle>,
      };
    }
    return {
      iconStyle: {borderColor: 'default'},
      bgStyle: {},
      fontStyle: {
        fontWeight: 'normal',
      } as unknown as StyleProp<TextStyle>,
    };
  }, [isActive]);

export const usePageStatus = (initialIndex: number) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [videoIndexInPlaying, setVideoPlay] = useState(initialIndex);

  const onSelectTemplate = useCallback(index => setActiveIndex(index), []);
  const onToggleVideo = useCallback(index => setVideoPlay(index), []);

  return {
    activeIndex,
    videoIndexInPlaying,
    onSelectTemplate,
    onToggleVideo,
  };
};
