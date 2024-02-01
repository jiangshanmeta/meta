class ThroneInheritance {
    private dSet = new Set<string>();
    private p2cMap = new Map<string, string[]>();
    constructor (private kingName: string) {
        this.p2cMap.set(kingName, []);
    }

    birth (parentName: string, childName: string): void {
        this.p2cMap.get(parentName)!.push(childName);
        this.p2cMap.set(childName, []);
    }

    death (name: string): void {
        this.dSet.add(name);
    }

    getInheritanceOrder (): string[] {
        const map = this.p2cMap;
        const set = this.dSet;
        const result:string[] = [];
        const dfs = (pName:string) => {
            if (!set.has(pName)) {
                result.push(pName);
            }
            const children = map.get(pName)!;
            for (let i = 0; i < children.length; i++) {
                dfs(children[i]);
            }
        };
        dfs(this.kingName);
        return result;
    }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
