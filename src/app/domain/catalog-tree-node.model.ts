import { CatalogNode } from './catalog-node.model';

export interface CatalogTreeNode extends CatalogNode {
    expandable: boolean;
    level: number;
}