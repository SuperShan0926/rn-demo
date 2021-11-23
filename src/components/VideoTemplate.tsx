import React, {useEffect, useRef} from 'react';
import {Text, Pressable, View, Image} from 'react-native';
import {styles} from './VideoTemplate.styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {PAUSE_ICON, PLAY_ICON} from '../constants';
import {useActiveStyle} from '../hooks';
import type {Item} from '../types';

interface VideoProp {
  item: Item;
  isActive: boolean;
  isPaused: boolean;
  onSelectTemplate: (index: number) => void;
  onToggleVideo: (index: number) => void;
}

interface VideoAction {
  isPlaying: () => boolean;
  stop: () => void;
  start: () => void;
}

export const VideoTemplate: React.FC<VideoProp> = ({
  item: {tplDesc, tplName, id},
  isActive,
  isPaused = true,
  onSelectTemplate,
  onToggleVideo,
}) => {
  const {iconStyle, bgStyle, fontStyle} = useActiveStyle(isActive);
  const selectTemplate = () => onSelectTemplate(isActive ? -1 : id);
  const toggleVideo = () => onToggleVideo(isPaused ? id : -1);

  const videoRef = useRef<VideoAction>(null);

  useEffect(() => {
    // 模拟 【暂停/播放】 video
    if (!isPaused && videoRef.current?.isPlaying?.()) {
      return videoRef.current?.stop?.();
    }
    if (isPaused) {
      if (videoRef.current?.isPlaying?.()) {
        return;
      }

      videoRef.current?.start?.();
    }
  }, [isPaused]);

  return (
    <View
      style={[styles.container, styles.flexBox, styles.flexColumn, bgStyle]}>
      <View style={[styles.containerSize, styles.flexBox]}>
        <Pressable style={styles.icon} hitSlop={10} onPress={toggleVideo}>
          <Image
            source={{
              uri: isPaused ? PLAY_ICON : PAUSE_ICON,
            }}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.flexBox, styles.descWrapper]}
        onPress={selectTemplate}>
        <View>
          <Text style={fontStyle}>{tplName}</Text>
          <Text style={fontStyle}>{tplDesc}</Text>
        </View>
        <BouncyCheckbox
          fillColor="red"
          iconStyle={iconStyle}
          style={styles.checkBox}
          isChecked={isActive}
          disableBuiltInState
          disableText
          onPress={selectTemplate}
        />
      </Pressable>
    </View>
  );
};
