import Project from "./Project/Project"

const title = "Project Name"
const shortDescription = "A short Project description"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ullamcorper ornare. Vivamus vitae auctor tortor. In sed mauris nec ligula vehicula efficitur sed in nisl. Fusce eget interdum est. Vivamus eu feugiat nibh. Curabitur in eros massa. Nulla facilisi. Mauris ac lobortis dolor. Curabitur id diam metus. Aliquam id leo at risus iaculis porta non et nisl. Donec at ante in quam laoreet pharetra luctus vitae lectus. "

function Projects() {
  return (
    <div>
        <Project title={title} shortDescription={shortDescription} description={description}/>
    </div>
  )
}

export default Projects