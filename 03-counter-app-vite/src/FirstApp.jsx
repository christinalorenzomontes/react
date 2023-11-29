import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }) => {

    return (<>
        <div data-testid="test-title">{ title }</div>
        {/* <code>{ JSON.stringify( newMessage )}</code> */}
        {/* <p>{ sumF() }</p> */}
        <p>{ subtitle }</p>
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