import { useState, useEffect, Suspense } from "react";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; // Import the spinner icon

const LazyLayout = ({ component: Component, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Set the duration in milliseconds (e.g., 2000ms = 2 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', minHeight: '90vh' }}>
            {isLoading && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '48px' }} />
                </div>
            )}
            {!isLoading && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Component {...rest} />
                </Suspense>
            )}
        </div>
    )
}

LazyLayout.propTypes = {
    component: PropTypes.elementType.isRequired
}

export default LazyLayout;
