export interface IPaging {
    pageNo: number;
    pageSize: number;
}

export interface IVehicle {
    name: string;
    type: string,
    image: string,
    specifications: any
}

export interface IFare {
    totalAmount: number;
    perDay: number;
}

export interface ICancellationDetails {
    isCancellationFree: boolean;
    freeCancellationEndDate: string;
}

export interface ICarItineraries {
    id: number;
    unlimitedMileage: boolean;
    cancellationDetails: ICancellationDetails;
    fare: IFare;
    vehicle: IVehicle;
}

