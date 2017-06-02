export class StatusCounterService {
    private activateCount: number = 0;
    private deactivateCount: number = 0;
    
    constructor() { }

    updateActivateCounter() {
        this.activateCount++;
        console.log('Times users were activated ', this.activateCount);
    }

    updateDeactivateCount() {
        this.deactivateCount++;
        console.log('Times users were deactivated ', this.deactivateCount);
    }
}