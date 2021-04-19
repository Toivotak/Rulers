import Main from './Main'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const PageWrapper = () => {

    return(
        <div className="pageWrapper">
            <LeftSide />
            <Main />
            <RightSide />
        </div>
    )
}

export default PageWrapper;