/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {genFakeData} from './mock';
import {VideoContainer} from './components/VideoContainer';
import type {Item} from './types';

const data: Item[] = genFakeData(20);

const App = () => <VideoContainer data={data} />;

export default App;
