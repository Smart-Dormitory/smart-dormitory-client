'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {css} from "../../styled-system/css";

const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={styles}>Hello SmartDormitory</div>
        </QueryClientProvider>
    )
}

const styles = css({
    fontSize: '30px',
})
