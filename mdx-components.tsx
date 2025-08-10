import type { MDXComponents } from 'mdx/types'
import {List} from '@chakra-ui/react';

const components: MDXComponents = {
    li: ({ children }) => (
        <div className = "">{children}</div>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}