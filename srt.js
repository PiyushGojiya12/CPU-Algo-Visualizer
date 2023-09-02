let burst_time = []; 
let arrival_time = []; 
let remaining_time = [];
let turn_around_time = [];
let waiting_time = [];
let Average_waiting_time;
let Average_turn_around_time;
let completion_time;
let complete = 0;
let shortest = 0; 

for (let i = 0; i < 100; i++)
    remaining_time[i] = burst_time[i];

let r = 0;    
function findavgTime()
{
    let t=0;
    let n = arrival_time.length;
    let total_waiting_time = 0;
    let total_turn_around_time = 0;
    let minm = 10000;
    
    while (complete < n) {
        for (let j = 0; j < n; j++) {
            if ((arrival_time[j] <= t) && (remaining_time[j] < minm) && remaining_time[j] > 0) {
                minm = remaining_time[j];
                shortest = j;
                r = 1;
            }
        }
  
        if (r == 0) {
            t++;
            continue;
        }

        remaining_time[shortest]--;
        minm = remaining_time[shortest];
        
        if (minm == 0)
            minm = 10000;
  
        if (remaining_time[shortest] == 0) {
            complete += 1;
            r = 0;
            completion_time = t + 1;
            waiting_time[shortest] = completion_time - burst_time[shortest] - arrival_time[shortest];
  
            if (waiting_time[shortest] < 0)
                waiting_time[shortest] = 0;
        }
        t++;
    }
   
    for (let i = 0; i < n; i++) {
        turn_around_time[i] = burst_time[i] + waiting_time[i];
        total_waiting_time += waiting_time[i];
        total_turn_around_time += turn_around_time[i];
    }
  
    Average_waiting_time = total_waiting_time / n;
    Average_turn_around_time = total_turn_around_time /n;
}
  
