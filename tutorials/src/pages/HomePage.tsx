import TutorialPost from "../components/TutorialPost"
import intro from '../tutorials/intro.md'

export const HomePage  = () => {
    return(
        <section className="p-10">
            <TutorialPost title="" content={intro}/>
        </section>
    )
}