import { useState, useCallback } from 'react';
import produce from 'immer';

import {createContainer} from 'react-tracked';

const initialState = {
    todos: [
        { id: 1, title: 'Wash dishes'},
        { id: 2, title: 'Study JS'},
        { id: 3, title: 'Buy Tickets'},
    ]
};

const useValue = () => useState(initialState);

export const {
    Provider,
    useTrackedState,
    useUpdate: useSetState
} = createContainer(useValue);

export const useSetDraft = () => {
    const setState = useSetState();
    return useCallback( draftUpdater => {
        setState(produce(draftUpdater))
    }, [setState])
};
