import { useLocation } from 'react-router';

export default function useQuery(param) {
    return (
        new URLSearchParams(useLocation().search).get(param)
    )
}