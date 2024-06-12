/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LoanProduct } from './loanProduct';


export interface LoanProductPaymentAllocationRule { 
    allocationTypes?: Array<LoanProductPaymentAllocationRule.AllocationTypesEnum>;
    createdBy: number;
    createdDate: string;
    createdDateTime: string;
    futureInstallmentAllocationRule?: LoanProductPaymentAllocationRule.FutureInstallmentAllocationRuleEnum;
    id?: number;
    lastModifiedBy: number;
    lastModifiedDate: string;
    lastModifiedDateTime: string;
    loanProduct?: LoanProduct;
    _new?: boolean;
    transactionType?: LoanProductPaymentAllocationRule.TransactionTypeEnum;
}
export namespace LoanProductPaymentAllocationRule {
    export type AllocationTypesEnum = 'PAST_DUE_PENALTY' | 'PAST_DUE_FEE' | 'PAST_DUE_PRINCIPAL' | 'PAST_DUE_INTEREST' | 'DUE_PENALTY' | 'DUE_FEE' | 'DUE_PRINCIPAL' | 'DUE_INTEREST' | 'IN_ADVANCE_PENALTY' | 'IN_ADVANCE_FEE' | 'IN_ADVANCE_PRINCIPAL' | 'IN_ADVANCE_INTEREST';
    export const AllocationTypesEnum = {
        PastDuePenalty: 'PAST_DUE_PENALTY' as AllocationTypesEnum,
        PastDueFee: 'PAST_DUE_FEE' as AllocationTypesEnum,
        PastDuePrincipal: 'PAST_DUE_PRINCIPAL' as AllocationTypesEnum,
        PastDueInterest: 'PAST_DUE_INTEREST' as AllocationTypesEnum,
        DuePenalty: 'DUE_PENALTY' as AllocationTypesEnum,
        DueFee: 'DUE_FEE' as AllocationTypesEnum,
        DuePrincipal: 'DUE_PRINCIPAL' as AllocationTypesEnum,
        DueInterest: 'DUE_INTEREST' as AllocationTypesEnum,
        InAdvancePenalty: 'IN_ADVANCE_PENALTY' as AllocationTypesEnum,
        InAdvanceFee: 'IN_ADVANCE_FEE' as AllocationTypesEnum,
        InAdvancePrincipal: 'IN_ADVANCE_PRINCIPAL' as AllocationTypesEnum,
        InAdvanceInterest: 'IN_ADVANCE_INTEREST' as AllocationTypesEnum
    };
    export type FutureInstallmentAllocationRuleEnum = 'NEXT_INSTALLMENT' | 'LAST_INSTALLMENT' | 'REAMORTIZATION';
    export const FutureInstallmentAllocationRuleEnum = {
        NextInstallment: 'NEXT_INSTALLMENT' as FutureInstallmentAllocationRuleEnum,
        LastInstallment: 'LAST_INSTALLMENT' as FutureInstallmentAllocationRuleEnum,
        Reamortization: 'REAMORTIZATION' as FutureInstallmentAllocationRuleEnum
    };
    export type TransactionTypeEnum = 'DEFAULT' | 'REPAYMENT' | 'DOWN_PAYMENT' | 'MERCHANT_ISSUED_REFUND' | 'PAYOUT_REFUND' | 'GOODWILL_CREDIT' | 'CHARGE_REFUND' | 'CHARGE_ADJUSTMENT' | 'WAIVE_INTEREST' | 'CHARGE_PAYMENT' | 'REFUND_FOR_ACTIVE_LOAN';
    export const TransactionTypeEnum = {
        Default: 'DEFAULT' as TransactionTypeEnum,
        Repayment: 'REPAYMENT' as TransactionTypeEnum,
        DownPayment: 'DOWN_PAYMENT' as TransactionTypeEnum,
        MerchantIssuedRefund: 'MERCHANT_ISSUED_REFUND' as TransactionTypeEnum,
        PayoutRefund: 'PAYOUT_REFUND' as TransactionTypeEnum,
        GoodwillCredit: 'GOODWILL_CREDIT' as TransactionTypeEnum,
        ChargeRefund: 'CHARGE_REFUND' as TransactionTypeEnum,
        ChargeAdjustment: 'CHARGE_ADJUSTMENT' as TransactionTypeEnum,
        WaiveInterest: 'WAIVE_INTEREST' as TransactionTypeEnum,
        ChargePayment: 'CHARGE_PAYMENT' as TransactionTypeEnum,
        RefundForActiveLoan: 'REFUND_FOR_ACTIVE_LOAN' as TransactionTypeEnum
    };
}

