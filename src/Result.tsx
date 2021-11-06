import { Link } from "react-router-dom";
import { workerData } from "worker_threads";

interface ResultProps {
    word: string | undefined
}

type Word = {
    text: string;
    isOkay: boolean;
    suggestion?: string;
    explanation?: string
}
export default function Result (props: ResultProps) {
    const storedWord: Word[] = [
        { text: 'retarded', isOkay: false, suggestion: 'bonehead', explanation: 'This is ableistic.'},
        { text: 'pussy', isOkay: false, suggestion: 'weakling', explanation: 'This is sexist.'},
        { text: 'bonehead', isOkay: true },
        { text: 'ridiculous', isOkay: true }
    ]
    
    const checkedWord = storedWord.find((word) => word.text === props.word)
    
    const renderResult = () => {
        if (checkedWord == undefined) {
            return (<p>Sorry, this word is not yet known to us.</p>);
        } else if (checkedWord.isOkay) {
            return (<p>Couldn't find anything wrong with that.</p>);
        } else {
            return (
                <p>
                    I'd rather not use that word, because {checkedWord.explanation} 
                    Maybe you can use {checkedWord.suggestion} instead                
                </p>
            )
        }
    }
    return (
        <>
    <h1>Results for {props.word}</h1>
    
    {renderResult()}
    
    <Link to="/">Back to main page</Link>
    </>
        )
}


