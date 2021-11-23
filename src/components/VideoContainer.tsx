import React, {Fragment} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {VideoTemplate} from './VideoTemplate';
import {usePageStatus} from '../hooks';
import {styles} from './VideoContainer.styles';
import type {Item} from '../types';

export const VideoContainer = ({data}: {data: Item[]}) => {
  const {activeIndex, videoIndexInPlaying, onSelectTemplate, onToggleVideo} =
    usePageStatus(-1);

  const renderVideo = <T extends Item>({
    item,
    index,
  }: {
    item: T;
    index: number;
  }) => {
    const Head = () =>
      index === 0 ? <Text style={styles.headText}>Template</Text> : null;

    return (
      <Fragment>
        <Head />
        <VideoTemplate
          item={item}
          isActive={activeIndex === item.id}
          isPaused={videoIndexInPlaying !== item.id}
          onSelectTemplate={onSelectTemplate}
          onToggleVideo={onToggleVideo}
        />
      </Fragment>
    );
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        data={data}
        renderItem={renderVideo}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};
