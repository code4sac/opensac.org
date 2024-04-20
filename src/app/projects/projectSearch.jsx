/**
 * Projects search section.
 * @returns {JSX.Element}
 */

const ProjectSearch = () => {
    return (
        <div className="project-search-section">
            <form className="project-search-form" action="">
                <div className="form-row project-search-row">
                    <input className="project-search" type="search" placeholder="Search" />
                    <img src="/img/form-element/search.svg" alt="Search icon." />
                </div>
                <div className="select-container">
                    <div className="form-row">
                        <label htmlFor="filter">Filter</label>
                        <select name="filter" id="filter" defaultValue="all">
                            <option selected value="all">All</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="sort-by">Sort By</label>
                        <select name="sort-by" id="sort-by">
                            <option selected value="most-recent">Most Recent</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectSearch