const BASE_URL = "http://localhost:4730";
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(BASE_URL + path, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...options.headers,
        },
        ...options,
    });

    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json() as Promise<T>;
}

export const api = {
    get: <T>(path: string) => request<T>(path),
};
