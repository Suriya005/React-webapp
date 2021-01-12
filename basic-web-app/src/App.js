import React, { useState } from 'react'
import './App.css';
import AppHeader from './components/AppHeader';
import AppItems from './components/AppItems';
import AppSearch from './components/AppSearch';
import Npost from './components/Npost';
import nData from './data/data'

function App() {
    const [selectedNtoo, setSelectNtoo] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onNClick(theData) {
        setSelectNtoo(theData)
    }

    function closePost() {
        setSelectNtoo(null)
    }

    const filterNtoo = nData.filter((nData) => {
        return nData.title.includes(searchText)
    }) //Search

    const ntooElement = filterNtoo.map((ntooz, index) => {
        return <AppItems key={index} ntoo={ntooz} onNClick={onNClick} />;
    });

    let nPost = null;
    if (!!selectedNtoo) {
        nPost = <Npost ntoo={selectedNtoo} onBgClick={closePost} />
    }

    return (
        <div className="App">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} changeValue={setSearchText} />
                    <div className="app-grid">
                        {ntooElement}
                    </div>
                </div>
            </section>
            {nPost}
        </div>
    );
}

export default App;
