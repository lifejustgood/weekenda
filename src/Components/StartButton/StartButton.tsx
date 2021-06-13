import './StartButton.css';

export function StartButton(props: any) {
   
    return (
        <div className='buttonRow'>
            <button type='button'
                id='showListButton'
                onClick={props.onClick} >Show Long Weekends</button>
        </div>
    )
}