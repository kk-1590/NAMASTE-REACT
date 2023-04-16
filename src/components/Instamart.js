import { useState } from "react"

const Section = ({ title,isVisible,setIsVisible }) => {


    return (
        <div className="border border-black p-2 m-2">
            <h3>{title}</h3>
            { (!isVisible) ?
            <button onClick={() => setIsVisible(true)}>Show</button> :
            <button onClick={() => setIsVisible(false)}>Hide</button>
            }
            { isVisible && <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate. Nesciunt quisquam architecto, voluptatibus optio sint, blanditiis enim, et culpa ad quos libero facilis provident ipsa itaque sapiente sequi consequatur nisi doloremque. Repellendus nostrum accusamus nam quas cupiditate, ipsa omnis odio esse. Neque delectus quisquam dolorem aliquid, commodi hic praesentium. Ea voluptatem, dignissimos doloremque pariatur sequi saepe unde reprehenderit sapiente dolore eveniet, nemo incidunt iusto, animi ullam perferendis suscipit tempore consequatur quae corrupti? Beatae reprehenderit voluptates laboriosam consectetur molestias ea magni maiores, nemo esse. Corrupti quia provident nesciunt? Praesentium reprehenderit eveniet perferendis sint voluptatem, laudantium delectus minima culpa consequatur nesciunt.
            </p>
            }
        </div>
    )
}


const Instamart = () => {

    // const [sectionConfig,setSectionConfig] = useState({
    //     showAbout: false,
    //     showTeam: false,
    //     showCareers: false
    // })


    const [visibleSection, setIsVisibleSection] = useState("team");


    return (
        <div>
            <h1>Instamart</h1>
            <h1>100s of components inside it</h1>
            <Section title={"About Instamart"} isVisible={visibleSection === 'about'} setIsVisible={() => setIsVisibleSection('about')}/>
            <Section title={"Team Instamart"} isVisible={visibleSection === 'team'} setIsVisible={() => setIsVisibleSection('team')}/>
            <Section title={"Careers"} isVisible={visibleSection === 'career'} setIsVisible={() => setIsVisibleSection('career')}/>
            {/* <AboutInstamart />
            <DetailsofInstamart />
            <TeamInstamart />
            <Product />
            <Careers /> */}
        </div>
    )
}

export default Instamart;