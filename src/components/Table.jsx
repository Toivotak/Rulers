import PropTypes from 'prop-types'
import Header from './Header'

const Table = ({ title, link, className }) => {
    return (
        <section class="table">
                <Header title="Continents" className="" hSize="h2"/>
                <table>
                    <tr>
                        <th>Europe</th>
                        <th>Asia</th>
                        <th>Africa</th>
                    </tr>
                    <tr>
                        <th>North America</th>
                        <th>South America</th>
                        <th>Oseania</th>
                    </tr>
                </table>
                <Header title="Countries" className="" hSize="h2"/>
                <table id="realms">
                    <tr>
                        <th><input id="uk" class="countrybtn" type="button" value="Great Britain" /></th>
                        <th><input id="france" class="countrybtn" type="button" value="France" /></th>
                        <th><input id="russia" class="countrybtn" type="button" value="Russia" /></th>
                    </tr>
                    <tr>
                        <th><input id="japan" class="countrybtn" type="button" value="Japan" /></th>
                        <th><input id="usa" class="countrybtn" type="button" value="U.S.A" /></th>
                        <th><input id="persia" class="countrybtn" type="button" value="Persia" /></th>
                    </tr>
                </table>
            </section>
    )
}

Table.defaultProps = {
    title: "Rulers of the 19th century",
    link: "https://en.wikipedia.org/wiki/19th_century",
    className: "title",
}

Table.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Table