import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'
import Header from './Header'

const Table = ({ title, link, className, type }) => {
    
    const onClick = () => {
        console.log("click form" ) 
    }

    if(type === "countries") {
        return (
            <section className="table">
                <Header title="Countries" className="" hSize="h2"/>
                <table className="realms">
                    <thead>
                        <tr>
                            <th><Button text="Great Britain" onClick={onClick}/></th>
                            <th><Button text="France" onClick={onClick}/></th>
                            <th><Button text="Russia" onClick={onClick}/></th>
                        </tr>
                        <tr>
                            <th><Button text="Japan" onClick={onClick}/></th>
                            <th><Button text="U.S.A" onClick={onClick}/></th>
                            <th><Button text="Persia" onClick={onClick}/></th>
                        </tr>
                    </thead>
                </table>
            </section>
        )
    }
    if (type === "continents") {
        return (
            <section className="table">
                    <Header title="Continents" className="" hSize="h2"/>
                    <table className="continents">
                        <thead>
                            <tr>
                                <th><Button text="Europe"/></th>
                                <th><Button text="Asia"/></th>
                                <th><Button text="Africa"/></th>
                            </tr>
                            <tr>
                                <th><Button text="North America"/></th>
                                <th><Button text="South America"/></th>
                                <th><Button text="Oseania"/></th>
                            </tr>
                        </thead>
                    </table>
                </section>
        )
    }
    return (
        <section className="table">
            <Header title="Invalid" className="" hSize="h2"/>
            <table>
                <thead>
                    <tr>
                        <th>Table</th>
                    </tr>
                </thead>
            </table>
        </section>
    )
}

Table.defaultProps = {
    title: "Rulers of the 19th century",
    link: "https://en.wikipedia.org/wiki/19th_century",
    className: "title",
    type: "continents"
}

Table.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Table