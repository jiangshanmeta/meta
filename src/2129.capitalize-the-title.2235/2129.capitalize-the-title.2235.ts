function capitalizeTitle (title: string): string {
    return title.split(' ').map((item) => {
        if (item.length < 3) {
            return item.toLowerCase();
        }
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
    }).join(' ');
}
