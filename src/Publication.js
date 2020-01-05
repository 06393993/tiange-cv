import React, {useState} from 'react';
import classnames from 'classnames';
import './Publication.css';
import { papers } from './papers';

const SELECTED = "SELECTED";
const ALL = "ALL";

function authorShouldBeEmphasized(name) {
    return name === "Tiange Luo" || name === "Tiange Luo*";
}

function PaperItem(props) {
    const [bibtexVisibility, setBibtexVisibility] = useState(false);
    const authors = (<ul className="author-list">
        {props.authors.map(author => (
            <li key={author}>{authorShouldBeEmphasized(author) ? <strong>{author}</strong> : author}</li>
        ))}
    </ul>);
    const links = (<ul className="breadcrumb">
        <li><a href={props.paperLink}>paper</a></li>
        <li><a onClick={() => setBibtexVisibility(!bibtexVisibility)}>bibtex</a></li>
        {props.otherLinks.map((link, i) => (<li key={i}>
            {link}
        </li>))}
    </ul>);
    return (
        <div className="paper-container">
            <div className="paper-info">
                <div className="paper-title">{props.title}</div>
                <div>{authors}</div>
                <div>{props.from}</div>
                <div>{links}</div>
                {bibtexVisibility && (
                    <div style={{margin: "2em 2em 0 2em"}}>
                        <code>{props.bibtex.trim()}</code>
                    </div>
                )}
                {props.withBrief && <div style={{ marginTop: "1em"}}>{props.brief}</div>}
            </div>
            {!props.noImg && props.img && (<div className="paper-image-container">
                <img src={props.img} alt="" width="160px"/>
            </div>)}
        </div>
    );
}

function SelectedPapers() {
    const selectedPapers = papers.filter(({ selected }) => selected);
    return (
        <ul class="selected-paper-list">
            {selectedPapers.map(paper => (
                <li key={paper.title}><PaperItem {...paper} withBrief/></li>
            ))}
        </ul>
    );
}

function AllPapersByTopcis() {
    const topics = [];
    for(let {topic} of papers) {
        if(topics.indexOf(topic) < 0) {
            topics.push(topic);
        }
    }
    return <ul className="topic-list">{topics.map(topic => (
        <li key={topic}>
            <div className="paper-topic">{topic}:</div>
            <ul class="topic-paper-list">
                {papers.filter(({topic: _topic}) => _topic === topic).map(paper => (
                    <li key={paper.title}><PaperItem {...paper} noImg/></li>
                ))}
            </ul>
        </li>
    ))}</ul>;
}

function Publication() {
    const [activatedItem, setActivatedItem] = useState(SELECTED);
    return (
        <div>
            <div style={{paddingBottom: "20px"}}>
                <span style={{fontSize: "22px"}}>Publication</span>
                (
                <ul className="breadcrumb">
                    <li>
                        <a className={classnames({'enabled-category': activatedItem === SELECTED})}
                            onClick={() => setActivatedItem(SELECTED)}>show selected</a>
                    </li>
                    <li>
                        <a className={classnames({'enabled-category': activatedItem === ALL})}
                            onClick={() => setActivatedItem(ALL)}>show all by topic</a>
                    </li>
                </ul>
                )  
            </div>
            <div>
                {activatedItem === SELECTED && <SelectedPapers />}
                {activatedItem === ALL && <AllPapersByTopcis />}
            </div>
        </div>
    );
}

export default Publication;
