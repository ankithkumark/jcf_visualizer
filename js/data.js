// Competitive Programming Data & Interactions
export const collectionData = {
    "Iterable": {
        type: "Interface",
        description: "The root interface for all collections. It allows objects to be the target of the 'for-each' loop statement.",
        complexity: "N/A",
        cpTip: "Use <code>.forEach(x -> ...)</code> for concise processing. Essential for traversing custom data structures that implement this interface."
    },
    "Collection": {
        type: "Interface",
        description: `The root interface of the Java Collections Framework. It is extended by core subinterfaces like List, Set, and Queue. All common collection operations are defined here and are available to their implementations.
        <br><br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>add(E e)</code> - Inserts the specified element into the collection.</li>
            <li><code>size()</code> - Returns the number of elements in the collection.</li>
            <li><code>isEmpty()</code> - Returns <code>true</code> if the collection contains no elements.</li>
            <li><code>remove(Object o)</code> - Removes a single instance of the specified element.</li>
            <li><code>clear()</code> - Removes all elements from the collection.</li>
            <li><code>addAll(Collection<? extends E> c)</code> - Adds all elements from another collection.</li>
            <li><code>removeAll(Collection<?> c)</code> - Removes all elements present in the given collection.</li>
            <li><code>iterator()</code> - Returns an iterator for traversing elements.</li>
        </ul>`,
        complexity: "Varies depending on implementation (e.g., ArrayList, HashSet, LinkedList, etc.)",
        cpTip: `In Competitive Programming, prefer <code>collection.isEmpty()</code> over <code>collection.size() == 0</code> for better readability and potential micro-optimizations.
        <br><strong>⚠️ TLE Warning:</strong> Avoid using <code>addAll()</code> or <code>removeAll()</code> inside loops on Lists—they may lead to hidden O(N × M) complexity.
        <br>Also, instead of manually using <code>iterator()</code>, prefer enhanced for-loops:
        <code>for (E element : collection)</code>.`
    },
    "List": {
        type: "Interface",
        description: `An ordered collection (sequence) that extends Collection. It allows duplicate elements and provides positional (index-based) access and insertion.
        <br><br><strong style="color: var(--accent);">Crucial Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>add(E e)</code> / <code>add(int index, E e)</code> - Appends or inserts an element.</li>
            <li><code>get(int index)</code> - Returns the element at the given index.</li>
            <li><code>set(int index, E e)</code> - Replaces the element at the given index.</li>
            <li><code>remove(int index)</code> / <code>remove(Object o)</code> - Removes by index or by value.</li>
            <li><code>clear()</code> - Removes all elements from the list.</li>
            <li><code>size()</code> - Returns the number of elements.</li>
            <li><code>sort(Comparator<? super E> c)</code> - Sorts the list (use <code>null</code> for natural order).</li>
            <li><code>contains(Object o)</code> - Checks if the list contains a value.</li>
        </ul>`,
        complexity: "Depends on implementation (ArrayList: O(1) access, LinkedList: O(N) access, etc.)",
        cpTip: `Program to the interface: <code>List&lt;Integer&gt; list = new ArrayList&lt;&gt;();</code>.
        <br>For Competitive Programming, prefer <code>ArrayList</code> due to fast random access.
        <br><strong>⚠️ CP Trap:</strong> <code>list.remove(5)</code> removes the element at index 5, NOT the value 5. To remove by value, use <code>list.remove(Integer.valueOf(5))</code>.
        <br><strong>⚠️ Performance:</strong> <code>contains()</code> and <code>remove(Object)</code> are O(N). If frequent lookups/removals are needed, use <code>HashSet</code> instead.
        <br><strong>⚠️ Avoid:</strong> Do not use legacy classes like <code>Vector</code> or <code>Stack</code> in CP due to unnecessary synchronization overhead.`
    },
    "ArrayList": {
        type: "Class",
        description: `A resizable array implementation of the List interface. It stores elements in contiguous memory, enabling fast random access and good cache performance.
        <br><br><strong style="color: var(--accent);">Crucial Methods & Complexities:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>add(E e)</code> - <strong>Amortized O(1)</strong>. Appends to the end. Returns <code>true</code>.</li>
            <li><code>add(int index, E e)</code> - <strong>O(N)</strong>. Inserts at position, shifts elements right.
            <br><em>Throws <code>IndexOutOfBoundsException</code> if index is invalid.</em></li>

            <li><code>addAll(Collection&lt;? extends E&gt; c)</code> / <code>addAll(int index, Collection c)</code> - <strong>O(N + M)</strong>.
            <br><em>Throws <code>NullPointerException</code> if collection is null.</em></li>

            <li><code>get(int index)</code> - <strong>O(1)</strong>. Returns element at index.
            <br><em>Throws <code>IndexOutOfBoundsException</code>.</em></li>

            <li><code>set(int index, E e)</code> - <strong>O(1)</strong>. Replaces element and returns old value.
            <br><em>Throws <code>IndexOutOfBoundsException</code>.</em></li>

            <li><code>remove(int index)</code> / <code>remove(Object o)</code> - <strong>O(N)</strong>.
            <br><em>Returns removed element (index) or <code>true/false</code> (object).</em>
            <br><em>(CP Trap: <code>list.remove(5)</code> removes index 5, not value 5 → use <code>Integer.valueOf(5)</code>)</em></li>

            <li><code>clear()</code> - <strong>O(N)</strong>. Removes all elements (does not shrink capacity).</li>

            <li><code>size()</code>, <code>isEmpty()</code> - <strong>O(1)</strong>.</li>

            <li><code>contains(Object o)</code>, <code>indexOf(Object o)</code>, <code>lastIndexOf(Object o)</code> - <strong>O(N)</strong>.</li>

            <li><code>sort(Comparator&lt;? super E&gt; c)</code> - <strong>O(N log N)</strong>.
            <br>Ascending: <code>list.sort(null)</code> or <code>Comparator.naturalOrder()</code>
            <br>Descending: <code>Comparator.reverseOrder()</code></li>
        </ul>`,

        complexity: "Access: <code>O(1)</code><br>Search: <code>O(N)</code><br>Insert (end): <code>Amortized O(1)</code><br>Insert/Delete (middle): <code>O(N)</code>",

        cpTip: `Default choice for sequences in Competitive Programming.
        <br><strong>Pro-tip 1:</strong> Pre-allocate capacity to avoid resizing overhead: <code>new ArrayList&lt;&gt;(N)</code>.
        <br><strong>Pro-tip 2:</strong> Adjacency list pattern:
        <code>List&lt;Integer&gt;[] adj = new ArrayList[N];</code>
        <br>⚠️ Must initialize each list:
        <code>for (int i = 0; i &lt; N; i++) adj[i] = new ArrayList&lt;&gt;();</code>
        <br><strong>⚠️ Performance:</strong> Avoid <code>add(index, ...)</code> and <code>remove()</code> in loops → O(N²).
        <br><strong>When to avoid:</strong>
        <br>If frequent lookups needed → use <code>HashSet</code>.
        <br>If frequent middle operations → use <code>LinkedList.</code>`
    },
    "LinkedList": {
        type: "Class",
        description: `A doubly-linked list implementation of the <b>List</b>, <b>Queue</b>, and <b>Deque</b> interfaces. 
        It provides a wide range of operations for adding, removing, and accessing elements from both ends or by index.
        <br><br><strong style="color: var(--accent);">Key Features:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li>Supports index-based operations like <code>get(index)</code> and <code>set(index, element)</code>.</li>
            <li>Provides <code>addFirst()</code>, <code>addLast()</code>, <code>removeFirst()</code>, and <code>removeLast()</code> for Deque functionality.</li>
            <li>Includes search methods like <code>indexOf(element)</code> and <code>lastIndexOf(element)</code>.</li>
        </ul>`,
        complexity: `Access (<code>get</code>): <code>O(N)</code>
        <br>Insert/Delete (Ends): <code>O(1)</code>
        <br>Insert/Delete (Middle): <code>O(N)</code> (due to search time)`,
        cpTip: `<b>⚠️ CP Warning:</b> Generally avoid <code>LinkedList</code> in Java for Competitive Programming. 
        <br>• For <b>Stacks/Queues</b>: <code>ArrayDeque</code> is faster and uses less memory.
        <br>• For <b>Lists</b>: <code>ArrayList</code> is faster for random access (O(1) vs O(N)).
        <br><b>Use case:</b> Only use if you need an O(1) removal while using an <code>Iterator</code> in the middle of a list.`
    },
    "Queue": {
        type: "Interface",
        description: `A collection designed for holding elements prior to processing (FIFO). It extends the Collection interface.
        <br><br><b>Key Implementations:</b>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><b>ArrayDeque:</b> Preferred for standard BFS.</li>
            <li><b>LinkedList:</b> Implements Queue but is slower due to memory overhead.</li>
            <li><b>PriorityQueue:</b> Elements are ordered by priority (heap).</li>
        </ul>
        <br><strong style="color: var(--accent);">Method Comparison:</strong>
        <table style="width:100%; font-size:0.85em; border-collapse: collapse; margin-top:10px; border: 1px solid var(--divider-color);">
            <tr style="background: var(--box-bg);">
                <th style="padding:5px; border: 1px solid var(--divider-color);">Action</th>
                <th style="padding:5px; border: 1px solid var(--divider-color);">Throws Exception</th>
                <th style="padding:5px; border: 1px solid var(--divider-color);">Returns Special Value</th>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Insert</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>add(e)</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>offer(e)</code> (returns false)</td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Remove</b> head</td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>remove()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>poll()</code> (returns null)</td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Examine</b> head</td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>element()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>peek()</code> (returns null)</td>
            </tr>
        </table>`,
        complexity: "Add/Poll: <code>O(1)</code><br>Contains: <code>O(N)</code><br>Size: <code>O(1)</code>",
        cpTip: `<b>Safety First:</b> Always use <code>poll()</code> and <code>peek()</code> in CP. If the queue is empty, they return <code>null</code>, whereas <code>remove()</code> and <code>element()</code> will crash your program with a <code>NoSuchElementException</code>.
        <br><br><b>Performance:</b> <code>contains(e)</code> and <code>size()</code> work as expected, but remember <code>contains</code> is O(N).`
    },
    "PriorityQueue": {
        type: "Class",
        description: `An implementation of the heap data structure that implements the Queue interface.
        By default, it acts as a <b>Min-Heap</b>, where the head is the smallest element.
        <br><br><strong style="color: var(--accent);">Key Characteristics:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li>Elements are retrieved in sorted order even if the internal array is not fully sorted.</li>
            <li>Custom ordering can be achieved using the <b>Comparator</b> interface.</li>
            <li>Does not allow <code>null</code> elements.</li>
        </ul>`,
        complexity: `Insert (<code>offer</code>): <code>O(log N)</code>
        <br>Extract (<code>poll</code>): <code>O(log N)</code>
        <br>Peek: <code>O(1)</code>
        <br>Search (<code>contains</code>): <code>O(N)</code> `,
        cpTip: `<b>Max-Heap Shortcut:</b> Use <code>new PriorityQueue<>(Collections.reverseOrder())</code> or the lambda <code>(a, b) -> b - a</code>.
        <br><br><b>⚠️ CP Trap:</b> <code>toArray()</code> does <b>not</b> guarantee elements will be in sorted order; it returns them in the heap's internal array order. To get sorted elements, you must <code>poll()</code> them one by one.
        <br><br><b>Efficiency:</b> Use <code>size()</code> to check if the heap has elements before polling to avoid <code>null</code>.`
    },
    "Deque": {
        type: "Interface",
        description: `A linear collection that supports element insertion and removal at both ends. It extends the Queue interface.
        <br><br><strong style="color: var(--accent);">Stack vs. Queue Usage:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><b>As a Stack:</b> Use <code>push()</code>, <code>pop()</code>, and <code>peek()</code>. Preferred over the legacy <code>Stack</code> class because Deque is not synchronized.</li>
            <li><b>As a Queue:</b> Use <code>addLast()</code> and <code>pollFirst()</code> (FIFO).</li>
        </ul>
        <br><strong style="color: var(--accent);">Method Comparison:</strong>
        <table style="width:100%; font-size:0.85em; border-collapse: collapse; margin-top:10px; border: 1px solid var(--divider-color);">
            <tr style="background: var(--box-bg);">
                <th style="padding:5px; border: 1px solid var(--divider-color);">Feature</th>
                <th style="padding:5px; border: 1px solid var(--divider-color);">Throws Exception</th>
                <th style="padding:5px; border: 1px solid var(--divider-color);">Returns Null/False</th>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Add First</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>addFirst()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>offerFirst()</code></td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Add Last</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>addLast()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>offerLast()</code></td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Remove First</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>removeFirst()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>pollFirst()</code></td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Remove Last</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>removeLast()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>pollLast()</code></td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Peek First</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>getFirst()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>peekFirst()</code></td>
            </tr>
            <tr>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><b>Peek Last</b></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>getLast()</code></td>
                <td style="padding:5px; border: 1px solid var(--divider-color);"><code>peekLast()</code></td>
            </tr>
        </table>`,
        complexity: "All insertions/removals at ends: <code>O(1)</code>",
        cpTip: `<b>Crucial for CP:</b> Always use <code>Deque</code> instead of <code>Stack</code>.
        <br>• For <b>DFS</b> (Stack logic): <code>push()</code>/<code>pop()</code>.
        <br>• For <b>BFS</b> (Queue logic): <code>offer()</code>/<code>poll()</code>.
        <br>Use the <code>First/Last</code> versions specifically when solving <b>Sliding Window Maximum</b> or <b>Monotonic Queue</b> problems.`
    },
    "ArrayDeque": {
        type: "Class",
        description: `A resizable-array implementation of the <b>Deque</b> and <b>Queue</b> interfaces.
        <br><br><strong style="color: var(--accent);">Key Characteristics:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li>It has no capacity restrictions and grows dynamically as needed.</li>
            <li>Significantly faster than <b>Stack</b> and <b>LinkedList</b> for almost all use cases.</li>
            <li>Does <b>not</b> support <code>null</code> elements.</li>
        </ul>`,
        complexity: "All end operations: <code>Amortized O(1)</code><br>Space: <code>O(N)</code>",
        cpTip: `<b>The CP Choice:</b> Always prefer <code>ArrayDeque</code> over <code>Stack</code> because it is not synchronized and therefore faster.
        <br><br><b>Implementation Detail:</b> Use this as your default for <b>BFS</b> (Queue) and <b>DFS</b> (Stack).
        <br><br><b>Performance:</b> Because it is array-backed, it has better CPU cache performance than <code>LinkedList</code>.`
    },
    "Set": {
        type: "Interface",
        description: `An interface that models the mathematical set, ensuring no duplicate elements. It extends the Collection interface.
        <br><br><strong style="color: var(--accent);">Key Implementations & Subinterfaces:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><b>Classes:</b> HashSet, LinkedHashSet, EnumSet, and TreeSet.</li>
            <li><b>Subinterfaces:</b> SortedSet and NavigableSet.</li>
        </ul>
        <br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>add(e)</code> / <code>addAll(collection)</code>: Adds unique element(s) to the set.</li>
            <li><code>contains(e)</code> / <code>containsAll(collection)</code>: Checks for existence of element(s).</li>
            <li><code>remove(e)</code> / <code>removeAll(collection)</code>: Deletes specific element(s).</li>
            <li><code>retainAll(collection)</code>: Keeps only elements also present in the specified collection.</li>
            <li><code>size()</code> / <code>clear()</code>: Returns element count or empties the set.</li>
            <li><code>iterator()</code>: Accesses elements sequentially.</li>
            <li><code>toArray()</code>: Converts the set into an array.</li>
            <li><code>hashCode()</code>: Returns the hash code value for the set.</li>
        </ul>`,
        complexity: "Varies by implementation (O(1) for HashSet, O(log N) for TreeSet)",
        cpTip: `<b>Mathematical Operations:</b> 
        <br>• <b>Union:</b> <code>setA.addAll(setB)</code>
        <br>• <b>Intersection:</b> <code>setA.retainAll(setB)</code>
        <br>• <b>Subset:</b> <code>setA.containsAll(setB)</code>
        <br>• <b>Difference:</b> <code>setA.removeAll(setB)</code>
        <br><br><b>CP Choice:</b> Use <code>HashSet</code> for O(1) lookups and <code>TreeSet</code> when you need the elements to remain sorted.`
    },
    "HashSet": {
        type: "Class",
        description: `A class that provides the functionalities of a hash table data structure and implements the Set interface. It makes no guarantees as to the iteration order of the set.
        <br><br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>add(e)</code> / <code>addAll(coll)</code>: Inserts unique elements.</li>
            <li><code>contains(e)</code>: Returns <code>true</code> if the element exists.</li>
            <li><code>remove(e)</code> / <code>removeAll(coll)</code>: Deletes specific or all elements.</li>
            <li><code>isEmpty()</code> / <code>size()</code> / <code>clear()</code>: Utility methods for state management.</li>
            <li><code>clone()</code>: Creates a shallow copy of the HashSet.</li>
            <li><code>iterator()</code>: Used to access elements sequentially.</li>
        </ul>
        <br><strong style="color: var(--accent);">Set Operations:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><b>Union:</b> <code>set1.addAll(set2)</code> </li>
            <li><b>Intersection:</b> <code>set1.retainAll(set2)</code> </li>
            <li><b>Difference:</b> <code>set1.removeAll(set2)</code> </li>
            <li><b>Subset:</b> <code>set1.containsAll(set2)</code> </li>
        </ul>`,
        complexity: "Add/Remove/Contains: <code>Average O(1)</code><br>Space: <code>O(N)</code>",
        cpTip: `<b>Performance Warning:</b> While <code>O(1)</code> on average, hash collisions can lead to <code>O(N)</code> worst-case performance.
        <br><br><b>Implementation Detail:</b> If you need to maintain the order in which elements were inserted, use <code>LinkedHashSet</code> instead.`
    },
    "TreeSet": {
        type: "Class",
        description: "A NavigableSet implementation based on a Red-Black tree. Elements are ordered using their natural ordering or a custom Comparator.",
        complexity: "Add/Remove/Contains: <code>O(log N)</code>",
        cpTip: "Incredibly powerful. Acts as C++'s <code>std::set</code>. Use <code>treeSet.ceiling(val)</code> and <code>treeSet.floor(val)</code> to find the closest elements (equivalent to lower_bound / upper_bound)."
    },
    "Map": {
        type: "Interface",
        description: `An interface that maps unique keys to values, where each key is associated with exactly one value. 
        <br><br><strong style="color: var(--accent);">Key Implementations & Subinterfaces:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><b>Classes:</b> HashMap, TreeMap, LinkedHashMap, EnumMap, and WeakHashMap.</li>
            <li><b>Subinterfaces:</b> SortedMap, NavigableMap, and ConcurrentMap.</li>
        </ul>
        <br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>put(K, V)</code> / <code>putAll(map)</code>: Inserts mappings; new values replace old ones if the key exists.</li>
            <li><code>putIfAbsent(K, V)</code>: Inserts only if the key is not already present[cite: 65].</li>
            <li><code>get(K)</code> / <code>getOrDefault(K, default)</code>: Retrieves values; returns null or a default if missing.</li>
            <li><code>containsKey(K)</code> / <code>containsValue(V)</code>: Checks for existence of a key or value.</li>
            <li><code>replace(K, V)</code>: Updates value for key K.</li>
            <li><code>remove(K)</code> / <code>remove(K, V)</code>: Deletes mappings by key or key-value pair.</li>
        </ul>
        <br><strong style="color: var(--accent);">Views and Iteration:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>keySet()</code>: Returns a Set of all keys.</li>
            <li><code>values()</code>: Returns a Collection of all values.</li>
            <li><code>entrySet()</code>: Returns a Set of key-value pairs for iteration.</li>
        </ul>`,
        complexity: "Varies (O(1) for HashMap, O(log N) for TreeMap)",
        cpTip: `<b>Iteration Pattern:</b> Always use <code>entrySet()</code> for looping to avoid redundant <code>get()</code> calls:
        <br><code>for(Map.Entry&lt;K, V&gt; entry : map.entrySet()) { ... }</code>.
        <br><br><b>Frequency Counting:</b> <code>getOrDefault</code> is a massive time-saver for tallying elements without null checks.`
    },
    "HashMap": {
        type: "Class",
        description: `A hash table based implementation of the Map interface. It provides fast, unordered storage and retrieval of key-value pairs.
        <br><br><strong style="color: var(--accent);">Advanced Compute Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>computeIfAbsent(K, mappingFunction)</code>: Computes and inserts a value if the key is currently missing.</li>
            <li><code>computeIfPresent(K, remappingFunction)</code>: Computes a new value only if the key is already present.</li>
            <li><code>compute(K, remappingFunction)</code>: Computes a new value regardless of whether the key is present or not.</li>
            <li><code>merge(K, V, remappingFunction)</code>: Combines a new value with an existing mapping.</li>
        </ul>
        <br><strong style="color: var(--accent);">Utility Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>containsKey(K)</code> / <code>containsValue(V)</code>: Fast existence checks.</li>
            <li><code>clear()</code> / <code>isEmpty()</code> / <code>size()</code>: State management.</li>
            <li><code>clone()</code>: Creates a shallow copy of the map.</li>
        </ul>`,
        complexity: "Put/Get/ContainsKey: <code>Average O(1)</code><br>Worst-case: <code>O(N)</code> (due to collisions)",
        cpTip: `<b>Graph & DSA Masterclass:</b> <code>computeIfAbsent</code> is brilliant for building graph adjacency lists cleanly without manual null checks: 
        <br><code>map.computeIfAbsent(node, k -> new ArrayList<>()).add(neighbor);</code>
        <br><br><b>Concise Updates:</b> While <code>getOrDefault</code> is great, <code>merge</code> is heavily used in both competitive programming and backend development for elegant frequency updates:
        <br><code>map.merge(key, 1, Integer::sum);</code>`
    },
    "TreeMap": {
        type: "Class",
        description: "A Red-Black tree based NavigableMap implementation. Keys are sorted.",
        complexity: "Put/Get/ContainsKey: <code>O(log N)</code>",
        cpTip: "Similar to TreeSet, use this when you need key-value pairs but also need to query ranges, floors, or ceilings of keys quickly."
    },
    "Collections": {
        type: "Utility Class",
        description: `A utility class consisting exclusively of static methods that operate on or return collections. It provides the core algorithms for the framework.
        <br><br><strong style="color: var(--accent);">Search & Math Algorithms:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>binarySearch(list, key)</code>: Searches for a key using binary search. <b>The list must be sorted
                    first.</b></li>
            <li><code>min(coll)</code> / <code>max(coll)</code>: Finds the minimum or maximum element based on natural ordering
                or a Comparator.</li>
            <li><code>frequency(coll, obj)</code>: Returns the exact count of times an element is present.</li>
            <li><code>disjoint(coll1, coll2)</code>: Checks if two collections have absolutely no elements in common.</li>
        </ul>
        <br><strong style="color: var(--accent);">Order & Manipulation Algorithms:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>sort(list)</code>: Sorts elements into ascending order.</li>
            <li><code>reverse(list)</code> / <code>shuffle(list)</code>: Reverses the current order or completely randomizes it.
            </li>
            <li><code>swap(list, i, j)</code>: Swaps the elements at the specified indices.</li>
            <li><code>fill(list, obj)</code> / <code>copy(dest, src)</code>: Replaces every element with a specific value, or
                copies contents from one list to another.</li>
            <li><code>addAll(coll, elements...)</code>: Adds all specified elements to the target collection.</li>
        </ul>`,
        complexity: "Sort: <code>O(N log N)</code><br>Binary Search: <code>O(log N)</code><br>Min/Max/Freq/Reverse:<code>O(N)</code><br>Swap: <code>O(1)</code>",
        cpTip: `<b>DSA & CP Masterclass:</b>
        <br>• <b>Sorting:</b> <code>Collections.sort()</code> uses a highly optimized, stable Timsort algorithm. You can pass a
        custom lambda comparator easily: <code>Collections.sort(list, (a, b) -> a - b)</code>.
        <br>• <b>Binary Search Trick:</b> If <code>binarySearch()</code> does not find the element, it returns
        <code>-(insertion point) - 1</code>. You can transform this back using <code>Math.abs(result) - 1</code> to find exactly
        where the element <i>should</i> be inserted to maintain order.
        <br>• <b>Performance:</b> <code>Collections.swap()</code> is O(1) for <code>ArrayList</code> but O(N) for
        <code>LinkedList</code>.`
    },
    "Arrays": {
        type: "Utility Class",
        description: `A utility class in <code>java.util</code> containing static methods for manipulating arrays (such as
        sorting and searching).
        <br><br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>sort(arr)</code>: Sorts the array. Use <code>Collections.reverseOrder()</code> for descending (requires
                Object array, e.g., Integer[]).</li>
            <li><code>binarySearch(arr, key)</code>: Searches a <b>sorted</b> array. Returns <code>-(insertion point) - 1</code>
                if not found.</li>
            <li><code>fill(arr, val)</code>: Replaces every element with the specified value.</li>
            <li><code>copyOf(arr, len)</code> / <code>copyOfRange(arr, from, to)</code>: Creates a copied or sliced array.</li>
            <li><code>compare(arr1, arr2)</code> / <code>mismatch(arr1, arr2)</code>: Compares lexicographically or finds the
                first differing index.</li>
            <li><code>equals(arr1, arr2)</code>: Checks if both arrays have the exact same elements in the same order.</li>
            <li><code>toString(arr)</code>: Converts a 1D array to a readable string (e.g., "[1, 2, 3]"). Use
                <code>deepToString()</code> for 2D matrices.
            </li>
            <li><code>asList(elements...)</code>: Converts elements to a fixed-size List.</li>
        </ul>`,
        complexity: "Sort (Primitives): O(N log N) avg | Binary Search: O(log N)",
        cpTip: `<b>⚠️ The Quicksort TLE Hack:</b> <code>Arrays.sort()</code> on primitives (like <code>int[]</code>) uses
        Dual-Pivot Quicksort, which has a worst-case of O(N^2). On platforms like Codeforces, users construct malicious test
        cases to force your code to hit this worst-case and TLE.
        <br><b>Fix:</b> Either use <code>Integer[]</code> (which uses Timsort, guaranteed O(N \\log N)) or write a quick
        utility method to shuffle your primitive array before sorting it.
        <br><br><b>DP Initialization:</b> <code>Arrays.fill(dp, -1)</code> is the fastest way to reset a 1D memoization table.`
    },
    "String": {
        type: "Class",
        description: `Represents character strings. In Java, String objects are <b>immutable</b>, meaning their values cannot be
        changed after they are created.
        <br><br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>charAt(index)</code>: Returns the character at the specified index.</li>
            <li><code>substring(start, end)</code>: Extracts a portion of the string (from <code>start</code> up to
                <code>end - 1</code>).
            </li>
            <li><code>split(regex)</code>: Divides the string into an array of substrings.</li>
            <li><code>replace(old, new)</code>: Returns a new string with matching characters/text replaced.</li>
            <li><code>compareTo(str)</code> / <code>equals(str)</code>: Lexicographical comparison or exact equality.</li>
            <li><code>indexOf(str)</code> / <code>contains(str)</code>: Searches for a substring or character.</li>
            <li><code>toCharArray()</code>: Converts the entire string to a mutable <code>char[]</code> array.</li>
            <li><code>String.valueOf(data)</code>: Fast conversion of primitives/objects to a String.</li>
        </ul>`,
        complexity: "Access (charAt): O(1) | Substring/Split/Replace: O(N)",
        cpTip: `<b>⚠️ The Immutability Trap:</b> Never concatenate strings inside a loop using <code>+=</code>. Because Strings
        are immutable, Java creates a brand new String object every single iteration, resulting in O(N^2) time complexity and
        a guaranteed TLE on large inputs.
        <br><br><b>The CP Solution:</b> Always use <b><code>StringBuilder</code></b> for string manipulation in loops.
        <br><code>StringBuilder sb = new StringBuilder();</code>
        <br><code>sb.append(charOrString);</code>
        <br><code>System.out.println(sb.toString());</code>`
    },
    "Iterator": {
        type: "Interface",
        description: `Allows us to access elements of a collection sequentially. It is the base interface for
        collection traversal and has a subinterface called ListIterator.
        <br><br><strong style="color: var(--accent);">Core Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>hasNext()</code>: Returns true if there exists an element in the collection.</li>
            <li><code>next()</code>: Returns the next element of the collection.</li>
            <li><code>remove()</code>: Removes the last element returned by the <code>next()</code> method.</li>
            <li><code>forEachRemaining(action)</code>: Performs the specified action for each remaining element.</li>
        </ul>`,
        complexity: "Next/HasNext: O(1)",
        cpTip: `<b>Safe Deletion:</b> In CP, using a standard <code>for-each</code> loop will throw a
        <code>ConcurrentModificationException</code> if you try to remove an element while iterating. Always explicitly use an
        <code>Iterator</code> and its <code>remove()</code> method when you need to dynamically filter or delete elements from a
        Collection (like a HashSet or ArrayList) during traversal.`
    },
    "ListIterator": {
        type: "Interface",
        description: `An interface extending Iterator that provides bidirectional functionality specifically to
        access elements of a list.
        <br><br><strong style="color: var(--accent);">Bidirectional & Modification Methods:</strong>
        <ul style="margin-top: 5px; line-height: 1.6;">
            <li><code>previous()</code> / <code>next()</code>: Returns the previous or next element of the list.</li>
            <li><code>previousIndex()</code> / <code>nextIndex()</code>: Returns the index of the element that will be returned
                next or previously.</li>
            <li><code>set(e)</code>: Replaces the element returned by either <code>next()</code> or <code>previous()</code> with
                the specified element.</li>
            <li><code>remove()</code>: Removes the element returned by either next or previous.</li>
        </ul>`,
        complexity: "Movement/Set: O(1)",
        cpTip: `<b>In-Place Updates:</b> <code>ListIterator</code> is extremely powerful when traversing an
        <code>ArrayList</code> or <code>LinkedList</code> and you need to replace elements in-place using <code>set()</code>
        without managing a secondary index variable. It is also the most efficient way to walk backward through a List.`
    },
};
