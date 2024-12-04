export declare namespace blob {
    export interface Blob {
        namespace: string;
        data: string;
        share_version: number;
        commitment: string;
        index: number;
    }
    interface ProofNode {
        end: number;
        nodes: string[];
        is_max_namespace_ignored: boolean;
    }
    export type Proof = ProofNode[];
    export type Commitment = string;
    export type GasPrice = number;
    export interface SubmitOptions {
        gas_price: number;
        is_gas_price_set?: boolean;
        gas?: number;
        key_name?: string;
        signer_address?: string;
        fee_granter_address?: string;
    }
    export interface CommitmentProof {
        subtree_roots: string[];
        subtree_root_proofs: RangeProof[];
        namespace_id: string;
        row_proof: RowProof;
        namespace_version: number;
    }
    export interface RangeProof {
    }
    export interface RowProof {
        row_roots: string[];
        proofs: LeafProof[];
        root: string;
        start_row: number;
        end_row: number;
    }
    export interface LeafProof {
        total: number;
        index: number;
        leaf_hash: string;
        aunts: string[];
    }
    export {};
}
//# sourceMappingURL=blob.d.ts.map