import {PackageModel, Packages} from '../../../models';
import {PackageComponent} from "../../components";

interface Loading {
    loading: boolean
}

interface PackageResults {
    packages: Packages
}

type PackageResultsProps = PackageResults & Loading;


function PackageArray({packages, loading}: PackageResultsProps): JSX.Element {
    return (
        <div>
            {loading ? <p>Loading...</p> : (
                packages.length === 0 ? <p>No results</p> :
                    <ul>
                        {packages.map((packageModel: PackageModel) => (
                            <li key={packageModel.id}>
                                <PackageComponent {...packageModel} />
                            </li>
                        ))}
                    </ul>
            )}
        </div>
    );
}

export {
    PackageArray
};
