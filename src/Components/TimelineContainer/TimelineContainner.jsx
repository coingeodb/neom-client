import './TimelineContainer.css'


import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const TimelineContainer = ({title, body, timlineText1, timlineText2, timlineText3}) =>{
    return(
        <div className='timelineContainer-main' >
            <div className='timelineContainer-main-timeline' >
                <div className='timelineContainer-main-timeline-item active'>{timlineText1}</div>
                <div><ChevronRightRoundedIcon fontSize='small' /></div>
                <div className='timelineContainer-main-timeline-item active'>{timlineText2}</div>
                <div><ChevronRightRoundedIcon fontSize='small' /></div>
                <div className='timelineContainer-main-timeline-item'>{timlineText3}</div>
            </div>
            <div className='timelineContainer-main-content'>
                <div className='timelineContainer-main-content-title'>{title}</div>
                <div className='timelineContainer-main-content-body' >{body}</div>
            </div>
        </div>
    )
}
export default TimelineContainer;