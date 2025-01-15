fn main() {
    let test = gimme([1,4,2]);
    println!("TEST = {}", test);
}

fn gimme(ar: [i32; 3]) -> usize {
    if ar[0] > ar[1] && ar[0] < ar[2] || ar[0] < ar[1] && ar[0] > ar[2] {
        return 0;
    }
    if ar[1] > ar[0] && ar[1] < ar[2] || ar[1] < ar[0] && ar[1] > ar[2] {
        return 1;
    }
    return 2;
}
