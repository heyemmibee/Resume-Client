export const formatDate = (s) => {
    try {
        const dt = new Date(s);
        return dt.toISOString().substr(0, 10);
    }
    catch {
        return s;
    }
}

export const dateDifference = (from, to) => {
    if (from === '') {
        from = Date.now()
    }

    const fromDt = new Date(from);
    const toDt = new Date(to);
    const diff = Math.floor(fromDt.getTime() - toDt.getTime());
    let secs = Math.floor(diff / 1000);
    let mins = Math.floor(secs / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 31);
    const years = Math.floor(months / 12);
    months = Math.floor(months % 12);
    days = Math.floor(days % 31);
    hours = Math.floor(hours % 24);
    mins = Math.floor(mins % 60);
    secs = Math.floor(secs % 60);

    if (years > 0) {
        return `${years} years ${months} mos`;
    }
    return `${months} mos`;
}