import React from 'react';
import renderer from 'react-test-renderer';

import {AlbumTitle} from '../src/screens/album/atoms/AlbumTitle';

describe('<AlbumTitle />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<AlbumTitle data={'test'} />).toJSON();
        expect(tree.children.length).toBe(1);
    })
    it('renders correctly', () => {
        const tree = renderer.create(<AlbumTitle data={'tesdt'}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

