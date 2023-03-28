export const DateToPmOrAm = (d:Date) => {
    const strd = d.toLocaleTimeString()
    const [time,pam] = strd.split(' ')

    const time2seg = time.split(':')
    time2seg.pop()

    const time2str = time2seg.join(':')

    return [time2str,pam].join(' ')
}