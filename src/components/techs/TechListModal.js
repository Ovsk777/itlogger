import React, {useState, useEffect} from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, [])                      //empty array as we want it to run once and no re-rendering required

    return (
       <div id="tech-list-modal" className="modal">
           <div className="modal-content">
               <h4>Technician List</h4>
               <ul className="collection">
                   {!loading && techs ?. techs.map(tech => <TechItem tech={tech} key={tech.id}/>)}
               </ul>
           </div>

       </div>
        )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech,
    getTechs: PropTypes.func.isRequired
})
export default connect(mapStateToProps, { getTechs })(TechListModal)
