import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }) => {

    return (<>
        <h1>{ title }</h1>
        {/* <code>{ JSON.stringify( newMessage )}</code> */}
        {/* <p>{ sumF() }</p> */}
        <p>{ subtitle }</p>
        <p>{ name }</p>
    </>);

}
export default FirstApp;

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
    //title: 'No title',
    subtitle: 'No subtitle',
    name: 'Christina'
}