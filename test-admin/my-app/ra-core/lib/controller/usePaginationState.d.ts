import { PaginationPayload } from '../types';
/**
 * @typedef PaginationProps
 * @type {Object}
 * @property {number} page: The page number.
 * @property {number} perPage: The number of item per page.
 * @property {Function} setPage: Set the page number
 * @property {Function} setPerPage: Set the per page number
 * @property {Function} setPagination: Set page and perPage pagination numbers
 */
export interface PaginationHookResult {
    page: number;
    perPage: number;
    pagination: PaginationPayload;
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
    setPagination: (pagination: PaginationPayload) => void;
}
declare const _default: (initialPagination?: {
    perPage?: number;
    page?: number;
}) => PaginationHookResult;
/**
 * Hooks to provide pagination state (apge and perPage)
 *
 * @example
 *
 * const { page, setpage, perPage, setPerPage } = usePagination(initialPerPage);
 *
 * @param {number} initialPagination the initial value per page
 * @returns {PaginationHookResult} The pagination props
 */
export default _default;
