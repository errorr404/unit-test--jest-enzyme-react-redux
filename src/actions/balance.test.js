import * as constants from './constants'
import * as actions from './balance'
import { isMainThread } from 'worker_threads';

isMainThread('creates an action to set the balance',()=>{
    const balance = 0

    const expectedAction = {type: , balance}
})