import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    getCurriculum,
    createCurriculum,
    deleteCurriculum
} from './actions';

class App extends Component {

  state = {
    curriculum:''
  }

  componentDidMount(){
    this.props.getCurriculum()
  }

  handlerChanges = (e) =>{
    const {value} = e.target;
    this.setState({
      curriculum: value
    })
  }

  addCurriculum = (e) =>{
    e.preventDefault();
    this.props.createCurriculum(this.state)
    this.setState({
      curriculum: ''
    })
  }

  removeCurriculum = (e) =>{
    e.preventDefault();
    const {id} = e.target;
    this.props.deleteCurriculum(id)
  }
  render() {
     const {Curriculums} = this.props;
     return (
       <div>
         <center>
           <h1>College of Computing</h1>
           <table>
            {Curriculums.map((name,index)=>{
                   return(
                     <tr>
                       <td> {name.id + '.' + ' ' + name.curriculum} </td>
                       <td>
                        <button id={name.id} onClick={this.removeCurriculum}>delete</button>
                       </td>
                     </tr>
                     )
                 })
              }
           </table>

          <h1>Add Curriculum</h1>
          <form onSubmit={this.addCurriculum}>
             <span>Name </span>
             <input type='text' onChange={this.handlerChanges} value={this.state.curriculum}/>
             <button type='submit'>Submit</button>
           </form>
         </center>
       </div>
     );
  }
}

const mapStateToProps = ({Curriculums})=>{
  return {Curriculums}
}
export default connect(mapStateToProps,{getCurriculum,createCurriculum,deleteCurriculum})(App);
