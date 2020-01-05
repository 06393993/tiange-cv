import React from 'react';
import portrait from './portrait.jpg';
import './Intro.css';

const headerStyle = {
    flex: '0 0 100%',
    textAlign: 'center',
    fontSize: '32px',
    margin: '14px 0 14px 0',
};

function Intro() {
    return (
        <div className="intro-container">
            <header style={headerStyle}>Tiange Luo (罗天歌)</header> 
            <div style={{width: '240px', display: 'flex', alignItems: 'center', flexFlow: 'wrap'}}>
                <img style={{width: '100%', paddingBottom: '14px'}} src={portrait} alt="portrait"/>
            </div>
            <div className="intro-content">
                <div>
                    I am a master student at EECS in Peking University advised
                    by <a href="https://scholar.google.com/citations?user=VZHxoh8AAAAJ&hl=zh-CN">Prof. Liwei Wang</a> and
                    am currently working as a visiting student in UCSD advised
                    by <a href="http://cseweb.ucsd.edu/~haosu/">Prof. Hao Su</a>.
                    Before that, I obtained my bachelor degree
                    from <a href="http://hc.buaa.edu.cn/">Honors College</a>,
                    Beihang University in 2017, where I worked
                    with <a href="https://scholar.google.com/citations?user=0ez7lA0AAAAJ&hl=en">Prof. Yunhong Wang</a> and&nbsp;
                    <a href="https://dblp.org/pers/hd/l/Liu:Tiegang">Prof. Tiegang Liu</a>.
                </div>
                <div>
                    My research interests are in machine learning and computer vision.
                    In particular, I am interested in building computational models of
                    human-like abilities, such as generalization, curiosity, and
                    commonsense reasoning. Here is
                    my <a href="https://tiangeluo.github.io/pdfs/ResearchStatement_tiange.pdf">Research Statement</a>.
                </div>
                <div>
                    I am applying for Ph.D in 2020 Fall. 
                </div>
                <ul className="breadcrumb">
                    <li><a href="mailto:luotg@pku.edu.cn">Email</a></li>
                    <li><a href="https://scholar.google.com/citations?hl=en&user=fbVyT0QAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar</a></li>
                    <li><a href="https://github.com/tiangeluo">Github</a></li>
                    <li><a href="https://tiangeluo.github.io/pdfs/Resume_tiange.pdf">CV</a></li>
                    <li><a href="https://tiangeluo.github.io/pdfs/ResearchStatement_tiange.pdf">Research Statement</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Intro;
