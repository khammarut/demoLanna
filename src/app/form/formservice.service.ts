import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http:HttpClient) { }

  getDes(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/description/' + projectname);
    }

  getDesid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/descriptionid/' + id);
    }

    deleteDes(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/description/'+id);
      }

  updateDes(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/description/'+ data.id,data);
  }

  getOutput(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/output/' + projectname);
    }

  getOutputid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/outputid/' + id);
    }

  deleteOutput(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/output/'+id);
      }

  updateOutput(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/output/'+ data.id,data);
  }
  
  getOutcome(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/outcome/' + projectname);
    }

  getOutcomeid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/outcomeid/' + id);
    }

  deleteOutcome(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/outcome/'+id);
      }
    
  updateOutcome(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/outcome/'+ data.id,data);
  }

  getBudget(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/budget/' + projectname);
    }

  getBudgetid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/budgetid/' + id);
    }

  deleteBudget(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/budget/'+id);
      }

  updateBudget(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/budget/'+ data.id,data);
  }
  
  getLastBudget(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/lastbudget/' + projectname);
    }

  getLastBudgetid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/lastbudgetid/' + id);
    }

  deleteLastBudget(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/lastbudget/'+id);
      }

  updateLastBudget(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/lastbudget/'+ data.id,data);
  }

  getDesBudget(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/desbudget/' + projectname);
    }

  getDesBudgetid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/desbudgetid/' + id);
    }

    
  deleteDesBudget(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/desbudget/'+id);
      }

  updateDesBudget(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/desbudget/'+ data.id,data);
  }

  getRisk(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/risk/' + projectname);
    }

  getRiskid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/riskid/' + id);
    }

  deleteRisk(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/risk/'+id);
      }

  updaterisk(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/risk/'+ data.id,data);
  }

    
  getStep(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/step/' + projectname);
    }

getStepid(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/stepid/' + id);
    }

  deletestep(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/step/'+id);
      }

  updateStep(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/step/'+ data.id,data);
  }
    
  getProjectApp(id): Observable<any> {
    return this.http
        .get('http://localhost:3000/projectapprove/' + id);
    }

getdisplay(projectname): Observable<any> {
    return this.http
        .get('http://localhost:3000/project/' + projectname);
    }

  getProject(): Observable<any> {
    return this.http
        .get('http://localhost:3000/project');
    }

  getProjectApprove(): Observable<any> {
    return this.http
        .get('http://localhost:3000/projectapprove');
    }

    deleteProjectApprove(id): Observable<any> {
      return this.http
          .delete('http://localhost:3000/projectapprove/'+id);
      }

      updateProjectApprove(data): Observable<any> {
        return this.http
            .put('http://localhost:3000/projectapprove/'+data.id,data);
        }
  
  checkLogin(username,password): Observable<any> {
        return this.http
            .get('http://localhost:3000/login/' + username + '/' + password);
        }
}
