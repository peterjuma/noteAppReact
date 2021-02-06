import "./styles.css";
import "./github.css";
import React from "react";

export default function App() {
  return (
    <div className="container">
        <div className="left">
            <div className="nav-bar">
                <div className="nav-left-icon">
                    <button id="homeBtn" className="btn"><i className="fa fa-home fa-lg" aria-hidden="true"></i></button>
                    <p>All Notes</p>
                    <button id="addNoteBtn" className="btn"><i className="fa fa-plus fa-lg" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className="search-bar">
                    <button className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
                    <input type="search" placeholder="Search Notes" className="search-field" />
            </div>

            <div className="note-list">
                <div className="note-list-item"><span>Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. </span></div>
                <div className="note-list-item"><span>Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. </span></div>
                <div className="note-list-item"><span>Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. </span></div>
                <div className="note-list-item"><span>Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. </span></div>
                <div className="note-list-item"><span>Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span></div>
                <div className="note-list-item"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. END </span></div>
            </div>
        </div>
            
        <div className="right">
            <div className="nav-bar">
                <div className="nav-right-icon">
                    <i className="fas fa-expand fa-lg btn" aria-hidden="true" style={{float: "left"}}></i>
                    <i className="far fa-edit fa-lg btn" style={{float: "left"}}> </i>
                    <i className="far fa-trash-alt fa-lg btn" aria-hidden="true" style={{float: "right"}}></i>
                    <i className="far fa-copy fa-lg btn" style={{float: "right"}}></i>
                    <i className="fas fa-download fa-lg btn" style={{float: "right"}}></i> 
                </div>
            </div> 
            <div className="main">
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
                <p>
                    Phasellus nec sem in justo pellentesque facilisis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Fusce ac felis sit amet ligula pharetra condimentum.

                    Donec sodales sagittis magna. Mauris sollicitudin fermentum libero. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Aenean commodo ligula eget dolor.

                    Phasellus magna. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Morbi mollis tellus ac sapien. Curabitur turpis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.

                    Cras non dolor. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Suspendisse potenti. Nunc nonummy metus. In consectetuer turpis ut velit.

                    Praesent nonummy mi in odio. Fusce a quam. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Cras dapibus.
                </p>
            </div>
            
        </div>
        
    </div>
  );
}
