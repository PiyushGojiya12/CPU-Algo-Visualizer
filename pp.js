let arrival_time = [];
let burst_time = [];
let priority = [];
let waiting_time = [];
let turn_around__time = [];
let completion_time = [];
let remaining_time = [];
let average_waiting_time = 0;
let average_turn_around_time = 0;
let total_waiting_time = 0;
let total_turn_around_time = 0;

for (let i = 0; i < 100; i++)
    remaining_time[i] = burst_time[i];

let r=0;
function calculate()
{
    let n = arrival_time.length; 
    let smallest = 1000;
    let count = 0; 
    priority[n] = 10000;
    let time = 0;

    while(count < n){
        
        smallest = n;
        let i=0;
        while(i<n)
        {
            if ((arrival_time[i] <= time) && (priority[i] < priority[smallest]) && (remaining_time[i] > 0)){
                smallest = i;
                r = 1;
            } 
            i++;   
        }

        if(r==0){
            time++;
            continue;
        }

        remaining_time[smallest]--;
        if (remaining_time[smallest] == 0)
        {
            count++;
            completion_time[smallest] = time + 1;
            waiting_time[smallest] = completion_time[smallest] - arrival_time[smallest] - burst_time[smallest];
            turn_around__time[smallest] = completion_time[smallest] - arrival_time[smallest];
        }
        time++;
    }
    
    for (let i = 0; i < n; i++)
    {
        total_waiting_time += waiting_time[i];
        total_turn_around_time += turn_around__time[i];
    }
    
    average_waiting_time = total_waiting_time / n;
    average_turn_around_time = total_turn_around_time /n;
    
}
