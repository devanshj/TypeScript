import module from "node:module";
import path from "node:path";

export function resolvePackageExecutable(packageJsonPath: string, platformPackage: string, exeName: string): string {
    const require = module.createRequire(packageJsonPath);
    const pkg = require(packageJsonPath);
    const pkgName = typeof pkg?.name === "string" ? pkg.name : "";
    const scope = pkgName.startsWith("@") ? pkgName.split("/")[0] : "@typescript";
    const platformPackageJson = require.resolve(`${scope}/${platformPackage}/package.json`);
    return path.join(path.dirname(platformPackageJson), "lib", exeName);
}
