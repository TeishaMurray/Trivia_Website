import { useEffect } from 'react' 
import { connect } from 'react-redux'
import fetchTrivia from '../actions/index'


const  mapStateToProps = (state) => {
    return {
        csTriviaData: state.triviaReducer.csTriviaData,
        jsTriviaData: state.triviaReducer.jsTriviaData
    }
}


const CompSciTrivia = (props) => {
    useEffect( () => {
        console.log("comp sci trivia mounted")
        props.fetchTrivia()
    }, [] )
    useEffect( () => {
        console.log(props)
    })
    return (
    <div>
        Hello we're inside compSciQuiz
    </div>
    )
}

export default connect(mapStateToProps, {fetchTrivia})(CompSciTrivia)
//^^connect method ties everything together 1st param is state/mapstate to props 2nd para is our action
