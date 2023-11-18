'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{

        }
    }
});

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
        
        </QueryClientProvider>
    )
}
