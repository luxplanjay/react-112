import { Link } from 'react-router';

export default function NotFoundPage() {
    return (
        <div>
            <p>
                404 Not Found! Please follow this{' '}
                <Link to="/dashboard">link</Link>
            </p>
        </div>
    );
}
