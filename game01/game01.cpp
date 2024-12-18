#include <stdio.h>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> game01(vector<int> &M, int N)
{

  unordered_map<int, int> hashmap; // creating a hashmap to store unique instances of M
  for (int i = 0; i < M.size(); i++) // iterating over the array (vector)
  {
    if (hashmap.find(N - M[i]) == hashmap.end()) // if i failed to find the number that would satisfy the sum of N (the target)
    {
      hashmap[M[i]] = i; // then i would save the current instance of M[i] in my hashmap and store its position in its correspondent key.
    }
    else
    {
      return {N - M[i], M[i]}; // if i do find the number i need to satisfy my sum, then i'll just return the set of numbers.
    }
  }

  return {0, 1}; // this line of code is just for avoiding compilation a error, since this function sould always return an answer.
}
int main()
{
  vector<int> M = {2, 5, 8, 14, 0};
  int N = 10;
  vector<int> res = game01(M, N);
  printf("[");
  for (int i = 0; i < res.size(); i++)
  {
    res.size() - 1 == i ? printf("%d", res[i]) : printf("%d, ", res[i]); // fancy printing
  }
  printf("]\n");
}