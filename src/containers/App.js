import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, setCount, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        count: state.setCount.count,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onCountButtonClick: (event) => dispatch(setCount(event)),
        onRequestRobots: () => dispatch(requestRobots()),
    }
}

function App(props) {
    const { 
        robots,
        isPending,
        // error,
        onRequestRobots,
        count, 
        onCountButtonClick, 
        searchField,
        onSearchChange 
    } = props;

    //Last Video Watched: 047 Why Redux_

    useEffect(() => {
        if(!robots.length) {
            onRequestRobots();
        }
    }, [robots, count, onRequestRobots]);

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
        <h1>Loading</h1>
    :
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={() => onCountButtonClick(parseInt(count+1))}>Click Me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
